import { useState, useCallback } from "react";
import SubmitForm from "../components/SubmitForm";
import { Button, Modal } from "@shopify/polaris";

const Index = () => {
    const [active, setActive] = useState(true);
    const [inputs, setInputs] = useState({ name: '', title: '', description: '' });

    const handleChange = useCallback(() => setActive(!active), [active]);

    const handleSubmit = () => {
        console.log(inputs);
    }

    return (
        <div>
            <p>Exercise 6</p>
            <Button onClick={handleChange}>Report</Button>
            <Modal
                open={active}
                onClose={handleChange}
                title='What do you need ?'
                primaryAction={{
                    content: 'Submit',
                    onAction: handleSubmit
                }}
                secondaryActions={{
                    content: 'Close',
                    onAction: handleChange
                }}
            >
                <Modal.Section>
                    <SubmitForm inputs={inputs} setInputs={setInputs} />
                </Modal.Section>
            </Modal>
        </div>
    )
};

export default Index;