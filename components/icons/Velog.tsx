import { Props } from './types';

const Velog = ({ size }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size.width} height={size.height} viewBox="0 0 24 24" className="fill-primary">
            <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3zm6.883 6.25q.945 0 1.125.9l1.463 8.303q.697-.923 1.146-1.553a14 14 0 0 0 1.283-2.273q.608-1.283.608-2.295q0-.607-.338-.967q-.315-.382-1.193-.967q.9-1.148 2.25-1.148q.72 0 1.193.428q.495.427.494 1.26q0 1.395-1.17 3.488q-1.147 2.07-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24q.9-.293 2.115-.63q1.215-.36 1.643-.36" />
        </svg>
    );
};

export default Velog;
