import { useState, useEffect } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback sau khi component mounted

// 3. useEffect(callback, [deps])
// - Chỉ gọi callback sau khi deps thay đổi

//---------------------
// Common
// 1. Callback luôn được gọi sau khi Component mounted
// 2. Clean up function luôn được gọi trước khi Component unmount//
// 3. Clean up function luôn được gọi trước khi Callback được gọi (trừ lần mounted)

const tabs = ["posts", "users", "comments"];
const lessons = [
    {
        id: 1,
        name: "What is React? - Part 1",
    },
    {
        id: 2,
        name: "SPA/MPA - Part 2",
    },
    {
        id: 3,
        name: "React Native - Part 3",
    },
];
function UseEffect() {
    const [title, setTitle] = useState("");
    const [data, setData] = useState([]);
    const [type, setType] = useState("users");
    //
    const [showToTop, setShowToTop] = useState(false);
    //
    const [countDown, setCountDown] = useState(180);
    //
    const [lesssonId, setlesssonId] = useState(1);
    // ----Change title----
    useEffect(() => {
        document.title = title;
    });

    // ----Time count down----
    useEffect(() => {
        const id = setInterval(() => {
            setCountDown((prev) => prev - 1);
        }, 1000);

        return () => {
            setInterval(id);
        };
    }, []);

    // ----Choose avatar----
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // Clean up function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);

        // Chọn nhiều ảnh chùng value
        // e.target.value = null;
    };

    // ----Tabs call api----
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [type]);

    // ----Button to top----
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ----Fake comments----
    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lessson-${lesssonId}`, handleComment);

        // Clean up function
        return () => {
            window.removeEventListener(`lessson-${lesssonId}`, handleComment);
        };
    }, [lesssonId]);

    return (
        <div className="container" style={{ paddingLeft: "50vw" }}>
            {/* Change title */}
            <div>
                <h2>Change title</h2>
                <input onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* Time count down */}
            <h2>Time count down</h2>
            <p>
                <strong>{countDown}</strong>
            </p>

            {/* Choose avatar */}
            <h2>Choose avatar</h2>
            <input type="file" onChange={handlePreviewAvatar} />
            {avatar && <img src={avatar.preview} alt="avatar" width="80%" />}

            {/* Tabs call api */}
            <h2>Tab</h2>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setType(tab)}
                    style={
                        type === tab
                            ? {
                                  color: "red",
                                  background: "#333",
                              }
                            : {}
                    }
                >
                    {tab}
                </button>
            ))}

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.title || item.name}</li>
                ))}
            </ul>

            {/* Button go to top */}
            <button
                style={{
                    display: showToTop ? "block" : "none",
                    position: "fixed",
                    bottom: "40px",
                    right: "20px",
                }}
            >
                Back to top
            </button>

            {/* Fake comments */}
            <h2>Fake chat app</h2>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        onClick={() => setlesssonId(lesson.id)}
                        style={{
                            color: lesssonId === lesson.id ? "red" : "#333",
                            cursor: "pointer",
                        }}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseEffect;
