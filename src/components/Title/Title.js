import './Title.css';

export default function Title({ text, width = 900 }) {
    return (
        <div className='title' style={{ width: width }}>
            <p>{text}</p>
        </div>
    )
}