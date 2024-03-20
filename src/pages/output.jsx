import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function Output() {
    const [fake_percent, setFakePercent] = useState("");
    const [type, setType] = useState("");
    const [imageUrl, setImageUrl] = useState(""); // State to store the URL of the uploaded image

    const navigate = useNavigate();

    const handleClick = () => {
        if (type === "image") {
            navigate("/");
        } else if (type === "audio") {
            navigate("/audio");
        }
    };

    useEffect(() => {
        setFakePercent(localStorage.getItem("fake_percent"));
        setType(localStorage.getItem("type"));
    }, []);

    useEffect(() => {
        // Fetch the uploaded image URL from localStorage and set it to the state
        let url = localStorage.getItem("imageUrl");
        if(url == null) {
            url = '/panda.svg';
        }
        setImageUrl(url);
    }, []);

    return (
        <main className="bg-black bg-background bg-cover min-h-screen w-screen ">
            <Navbar />
            <section className="px-[20vw] py-[8vh] flex flex-col items-center  justify-center h-[88vh]">
                <div className="h-full w-full flex flex-col items-center justify-center">
                    {/* Use imageUrl as the src attribute of the img tag */}
                    <img
                        src='/panda.svg'
                        className="h-1/4 md:h-3/5 my-5"
                        alt="Uploaded Image"
                    />
                    <h1 className="text-white font-bold text-4xl mb-10">
                        The {type} is{" "}
                        {fake_percent === "0" ? (
                            <span className="text-red-500">likely</span>
                        ) : (
                            <span className="text-green-500">not likely</span>
                        )}{" "}
                        to be generated by AI
                    </h1>

                    <button
                        onClick={handleClick}
                        className="text-white bg-main-purple px-5 py-3 rounded-full"
                    >
                        Upload another file
                    </button>
                </div>
            </section>
        </main>
    );
}