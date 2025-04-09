import { Dropdown } from 'azure-devops-ui/Dropdown';
import { TextField, TextFieldWidth } from 'azure-devops-ui/TextField';
import { Observer } from 'azure-devops-ui/Observer';
import { useState } from 'react';
import { IListBoxItem } from 'azure-devops-ui/ListBox';

export const POCDemo = (): JSX.Element => {
    const [courseTitle, setCourseTitle] = useState<string>('');
    const [modality, setModality] = useState<string>('');
    const courseTitleChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string): void => {
        setCourseTitle(value ?? '');
    };

    const modalityChanged = (event: React.SyntheticEvent<HTMLElement>, item: IListBoxItem<object>): void => {
        setModality(item.text ?? '');
    };
    return (
        <>
            <div className='tab'>
                <section>
                    <p>Course title</p>
                    <TextField
                        value={courseTitle}
                        onChange={courseTitleChanged}
                        placeholder="input course title"
                        width={TextFieldWidth.standard}
                    />
                </section>
                <section>
                    <p>Modality</p>
                    <Dropdown
                        ariaLabel="Basic"
                        className="example-dropdown"
                        placeholder="Select an Option"
                        items={[
                            { id: 'item1', text: 'Item 1' }
                        ]}
                        onSelect={modalityChanged}
                    />
                    <Observer selectedItem={modality}>
                        {(props: { selectedItem: string }) => {
                            return (
                                <span>
                                {/* Selected Item: {props.selectedItem}{''} */}
                                </span>
                            );
                        }}
                    </Observer>
                </section>
            </div>
        </>
    );
}
