import Link from "next/link";


const AboutContent = () => {
    return (
        <div>
            <h2>The Contents of about page</h2>
            <div className="flex gap-6 justify-center bg-blue-300">
                <Link href={'/about/history'} >History</Link>
                <Link href={'/about/mission'} >Mission</Link>
            </div>
        </div>
    );
};

export default AboutContent;