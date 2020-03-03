import { useState, useCallback } from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';

const SubmitForm = ({ inputs, setInputs }) => {


    const handleChange = (value, id) => {
        setInputs({
            ...inputs,
            [id]: value
        })
    }


    return (
        <Layout>
            <Layout.AnnotatedSection
                title='Submit your problem'
                description='Specify what you are trouble in'
            >
                <Card sectioned>
                    <FormLayout>
                        <TextField label='Name' id='name' name='name' value={inputs.name} onChange={handleChange} />
                        <TextField label='Title' id='title' name='title' value={inputs.title} onChange={handleChange} />
                        <TextField label='Description' id='description' name='description' value={inputs.description} onChange={handleChange} />
                    </FormLayout>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
}

export default SubmitForm;
