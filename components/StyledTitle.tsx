import { Separator } from './ui/separator';

const StyledTitle = ({ id, title }: { id: string; title: string }) => {
    return (
        <h2 className="relative text-2xl" id={id}>
            <span className="relative z-10 py-1 pr-3 bg-background text-foreground italic">{title}</span>
            <Separator className="absolute left-0 top-1/2 -translate-y-1/2" />
        </h2>
    );
};

export default StyledTitle;
