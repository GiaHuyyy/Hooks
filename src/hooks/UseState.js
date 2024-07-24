// UseState (Trạng thái dữ liệu)
// Dùng khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
import { useState } from "react";

const order = [200, 300, 400];
const gifts = ["iphone", "ipad", "macbook"];
const courses = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "JSss",
    },
];
function UseState() {
    // ----------------------Button Increse Decrese--------------------
    const [count, setCount] = useState(() => {
        const total = order.reduce((total, current) => total + current);
        return total;
    });

    const handlerCount = (e) => {
        const valueButton = e.target.value;
        if (valueButton === "Increase" && count >= 1) {
            setCount(count + 1);
        } else if (count > 1) {
            setCount(count - 1);
        }
    };

    // ---------------------------Update Info---------------------------
    const [info, setInfo] = useState({ name: "John", age: 20 });

    const handlerUpdate = () => {
        setInfo((prev) => ({ ...prev, bio: "Suziki Satria" }));
    };

    // ---------------------------Random Gift----------------------------
    const [gift, setGift] = useState();

    const handlerGift = () => {
        setGift(gifts[Math.floor(Math.random() * gifts.length)]);
    };

    // ---------------------------Radio checkbox-------------------------
    const [checkedRadio, setCheckedRadio] = useState(1);
    const handlerSubmitRadio = () => {
        // Call API
        console.log(courses[checkedRadio].name);
    };

    // -----------------------------Checkbox-----------------------------
    const [checkedCheckBox, setCheckedCheckBox] = useState([]);

    const handlerChooseCheck = (id) => {
        setCheckedCheckBox((prev) => {
            const isChecked = checkedCheckBox.includes(id);
            if (isChecked) {
                return checkedCheckBox.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    const handlerSubmitCheckBox = () => {
        // Call API
        console.log({ ids: checkedCheckBox });
    };

    // ------------------------------Todo list------------------------------

    const [list, setList] = useState(
        JSON.parse(() => {
            const storageList = JSON.parse(localStorage.getItem("list"));

            return storageList ?? [];
        })
    );
    const [value, setValue] = useState("");

    const handlerList = () => {
        setList((prev) => {
            const newList = [...prev, value];

            // Save local storage
            const jsonList = JSON.stringify(newList);
            localStorage.setItem("list", jsonList);

            return newList;
        });
        setValue("");
    };
    return (
        <div
            className="container"
            style={{ marginLeft: "50vw", paddding: "20px 0" }}
        >
            {/* Button Increse Decrese */}
            <h1>{count}</h1>
            <button value="Increase" onClick={handlerCount}>
                Increase
            </button>
            <button value="Decrease" onClick={handlerCount}>
                Decrease
            </button>

            {/* Update Info */}
            <h2>Info</h2>
            <p>{JSON.stringify(info)}</p>
            <button onClick={handlerUpdate}>Update info</button>

            {/* Random Gift */}
            <h2>Nhận phần thưởng: {gift}</h2>
            <button onClick={handlerGift}>Nhận thưởng (Random)</button>

            {/* Radio Checkbox */}
            <h2>Radio checkbox</h2>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checkedRadio === course.id}
                        onChange={() => setCheckedRadio(course.id)}
                    />
                    <label>{course.name}</label>
                </div>
            ))}
            <button onClick={handlerSubmitRadio}>Submit radio checkbox</button>

            {/* Check box */}
            <h2>Checkbox</h2>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checkedCheckBox.includes(course.id)}
                        onChange={() => handlerChooseCheck(course.id)}
                    />
                    <label>{course.name}</label>
                </div>
            ))}
            <button onClick={handlerSubmitCheckBox}>Submit checkbox</button>

            {/* Todo list */}
            <h2>Todo list: </h2>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handlerList}>Add</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

//

export default UseState;
