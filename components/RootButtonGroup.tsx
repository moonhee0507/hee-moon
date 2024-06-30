import ColorModeButton from './buttons/ColorModeButton';
import TopButton from './buttons/TopButton';

const RootButtonGroup = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-1">
            <ColorModeButton />
            <TopButton />
        </div>
    );
};

export default RootButtonGroup;
