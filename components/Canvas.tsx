import { Component, createRef } from 'react';
import throttle from 'raf-throttle';

export default class CanvasComponent extends Component {
    constructor(props) {
        super(props);

        this.canvasRef = createRef();
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.previousPosition = { x: 0, y: 0 };
    }

    handleMouseMove({ clientX, clientY }) {
        this.context.beginPath();
        this.context.moveTo(this.previousPosition.x, this.previousPosition.y);

        const newPosition = {
            x: clientX + window.scrollX,
            y: clientY + window.scrollY,
        };

        this.context.lineTo(newPosition.x, newPosition.y);
        this.previousPosition = newPosition;
        this.context.stroke();
    }

    handleScroll() {
        this.context.beginPath();
        this.context.moveTo(this.previousPosition.x, this.previousPosition.y);

        const newPosition = {
            x: window.scrollX + this.previousPosition.x,
            y: window.scrollY + this.previousPosition.y,
        };

        this.context.lineTo(newPosition.x, newPosition.y);
        // this.previousPosition = newPosition;
        this.context.stroke();
    }

    componentDidMount() {
        this.context = this.canvasRef.current.getContext('2d');
        this.context.globalCompositeOperation = 'difference';
        this.context.strokeStyle = '#000';
        document.addEventListener('mousemove', throttle(this.handleMouseMove));
        // window.addEventListener('scroll', throttle(this.handleScroll));
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
        return (
            <div>
                <canvas ref={this.canvasRef} width={10000} height={10000} />
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
