import { useEffect, useState } from "react";

export default function useCursor() {
    const [rotate, setRotate] = useState(0);
    const [move, setMove] = useState({
        x: 0,
        y: 0
    });
    const scrollListener = (e) => {
        // pointer position (could be a mouse or a touch)
        let pointerX = e.clientX;
        let pointerY = e.clientY;

        // difference between the width and the cursor position
        let deltaX = pointerX - (window.innerWidth / 2);
        let deltaY = pointerY - (window.innerHeight / 2);

        // setting the position of black ball
        setMove((prev) => { return { ...prev, x: (deltaX / 80), y: (deltaY / 80) } });

        // setting the angle for the white ball inside the black ball
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        setRotate(angle - 180);
    }
    useEffect(() => {
        window.addEventListener('pointermove', scrollListener);

        return () => {
            window.removeEventListener('pointermove', scrollListener)
        }

    });

    return {
        rotate,
        x: move.x,
        y: move.y
    }
}