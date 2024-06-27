import { Separator } from './ui/separator';

const StyledTitle = ({ id, title }: { id: string; title: string }) => {
    return (
        <h2 className="relative text-2xl" id={id}>
            <span className="relative z-10 bg-background py-1 pr-2 text-primary-foreground">{title}</span>
            <Separator className="absolute left-0 top-1/2 -translate-y-1/2" />
        </h2>
    );
};

export default StyledTitle;
