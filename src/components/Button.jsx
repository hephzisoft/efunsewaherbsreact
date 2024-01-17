



export default function Button({color, text, bgColor}) {
    return (
        <button className={`bg-${bgColor} rounded font-dmsans font-xl text-${color} px-7 py-3 mt-10`}>{text}</button>
    )
}