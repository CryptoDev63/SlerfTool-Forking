import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

const StyledRadioButton = (props: FormControlLabelProps) => {
    return (
        <FormControlLabel {...props} sx={{
            '& .MuiSvgIcon-root': {
                fontSize: 15,
            },
            '.MuiFormControlLabel-label': {
                fontSize: 14
            }
        }} />
    )
}

interface RadioButtonGropProps {
    action: (value: string) => void
    value: string
    options: string[]
}

const RadioButtonsGroup = ({action, value} : RadioButtonGropProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action((event.target as HTMLInputElement).value)
    };

    console.log("pooh, value = ", value)

    return (
        <FormControl>
            <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
                row
                onChange={handleChange}
            >
                <StyledRadioButton value="female" control={<Radio />} label="Female" />
                <StyledRadioButton value="male" control={<Radio />} label="Male" />
                <StyledRadioButton value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonsGroup