export const Button = ({ text, classname }) => {
    return (
        <button className={`bg-amber-500 py-2 px-3 rounded-md hover:bg-amber-500/70 , ${classname}`}>{text}</button>
    )
}