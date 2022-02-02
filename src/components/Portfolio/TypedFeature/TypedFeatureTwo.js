import React from 'react';
import Typed from "typed.js";
import { Button } from 'react-bootstrap';

const TypedFeatureTwo = () => {
    return (
        <>
            <div>
                <Button onClick={this.Typed.start()}>Start</Button>
                <Button onClick={this.Typed.stop()}>Stop</Button>
                <Button onClick={this.Typed.toggle()}>Toggle</Button>
                <Button onClick={this.Typed.destroy()}>Destroy</Button>
                <Button onClick={this.Typed.reset()}>Reset</Button>
                <Typed
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
            </div>
        </>
    );
}

export default TypedFeatureTwo;
