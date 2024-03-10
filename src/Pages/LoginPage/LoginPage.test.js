import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import LoginFunctionComponent from './LoginFunctionComponent';


describe('Test unreveal password on click', ()=>{
    // Test intial rendring with type of password hidden
    test('Test intial rendring with type of password hidden', ()=>{
        render(<LoginFunctionComponent/>)
        const inputPass = screen.getByTestId("test-pass")
        expect(inputPass).toHaveAttribute("type", "password")
    })


    test('Test the type of password after clicking on the reveal password icon', ()=>{
        render(<LoginFunctionComponent/>)
        const inputPass = screen.getByTestId("test-pass")
        const icon = screen.getByTestId("test-icon")
        userEvent.click(icon)
        expect(inputPass).toHaveAttribute("type", "text")
    })
    // Test after clicking on the reveal password
})