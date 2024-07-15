import Link from "next/link";
import "./styles.css"

const HomeNotice = () => {
    
    return (
        <div className="p-3 h-[350px] overflow-hidden overflow-y-auto custom-scrollbar">
            <h1 className="font-bold border-b">Notice and Updates</h1>
            <div>
                <Link href={"/newsupdates"}><div className="border-b py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div></Link>
                <Link href={"/newsupdates"}><div className="border-b py-3">What's your name bro?</div></Link>
                <Link href={"/newsupdates"}><div className="border-b py-3">What's your name bro?</div></Link>
                <Link href={"/newsupdates"}><div className="border-b py-3">What's your name bro?</div></Link>
            </div>
        </div>
    );
};

export default HomeNotice;