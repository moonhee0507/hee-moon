import Image from 'next/image';

const StyledListItem = ({ src, content }: { src: string; content: string }) => {
    return (
        <li className="flex items-center gap-4">
            <Image src={src} alt={content} width={40} height={40} />
            {content}
        </li>
    );
};

export default StyledListItem;
