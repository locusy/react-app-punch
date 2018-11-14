import * as React from 'react';
import { Alert, Button } from 'antd';

const styles = require('./Hello.less');
export interface IProps {
    name?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class Hello extends React.Component<IProps, any> {
    /**
     * render
     */
    public render() {
        const { name, onIncrement, onDecrement, enthusiasmLevel = 1 } = this.props;
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className={styles.hello}>
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <Alert showIcon={true} message="haha, it's just a test" />
                <div>
                    <Button type="primary" onClick={onDecrement}>-</Button>
                    <Button type="primary" onClick={onIncrement}>+</Button>
                </div>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
