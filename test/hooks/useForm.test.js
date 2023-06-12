import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe('Pruebas en el use form ', () => { 
    const initialForm = { 
        name: 'Fernando',
        email: 'fernando@google.com',
    }
    test('debe de regresar los valores por defecto', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
        });
    });
    test('debe de cambiar el nombre del formulario ', () => {
        const newValue = 'Juan';
        const result
        // montar el hook
        //onInputChange() // act, event...
        //expect, result.current.name === Juan
        //expect, result.current.FormState.name === Juan

    })
});