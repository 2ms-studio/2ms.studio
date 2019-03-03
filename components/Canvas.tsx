import { PureComponent, createRef } from 'react';

type Props = {};
type State = {
    width: number;
    height: number;
};

export default class Canvas extends PureComponent<Props, State> {
    ref = createRef<HTMLCanvasElement>();
    x = 0;
    y = 0;
    state = { width: 0, height: 2600 };

    constructor(props: Props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
        // this.handleScroll = this.handleScroll.bind(this);
    }

    draw(x: number, y: number) {
        if (this.ref && this.ref.current) {
            const ctx = this.ref.current.getContext('2d');

            if (ctx) {
                window.requestAnimationFrame(() => {
                    ctx.strokeStyle = '#000';
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(x, y);
                    this.x = x;
                    this.y = y;
                    ctx.stroke();
                });
            }
        }
    }

    handleMouseMove({ clientX, clientY }: MouseEvent) {
        if (this.x && this.y) {
            this.draw(clientX + window.scrollX, clientY + window.scrollY);
        } else {
            this.x = clientX;
            this.y = clientY;
        }
    }

    // handleScroll() {
    //     if (this.x && this.y) {
    //         const ctx = this.ref.current.getContext('2d');
    //         const newX = this.x - (this.x - window.scrollX);
    //         const newY = this.y - (this.y - window.scrollY);

    //         ctx.beginPath();
    //         ctx.moveTo(this.x, this.y);
    //         ctx.lineTo(newX, newY);
    //         ctx.stroke();
    //         this.x = newX;
    //         this.y = newY;
    //     }
    // }

    componentDidMount() {
        this.setState({
            width: document.documentElement.clientWidth,
            // height: document.documentElement.clientHeight,
        });
        document.addEventListener('mousemove', this.handleMouseMove, {
            passive: true,
        });
        // window.addEventListener('scroll', this.handleScroll, {
        //     passive: true,
        // });
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        // window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div>
                <canvas
                    ref={this.ref}
                    width={this.state.width}
                    height={this.state.height}
                />
                <style jsx>{`
                    div {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        pointer-events: none;
                        overflow: hidden;
                    }
                `}</style>
            </div>
        );
    }
}
