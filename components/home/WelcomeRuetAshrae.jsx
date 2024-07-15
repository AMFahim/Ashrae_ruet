import Image from "next/image";

const WelcomeRuetAshrae = () => {
    return (
        <div className="mx-20 flex items-center gap-3">
            <Image 
            src={"/ashrae.jpg"}
            width={150}
            height={150}
            alt="Ashrae"
            />
            <div>
                <p className="font-semibold">Welcome to</p>
            <h1 className=" text-2xl font-semibold">Ashrae RUET Student Branch</h1>
            </div>
        </div>
    );
};

export default WelcomeRuetAshrae;