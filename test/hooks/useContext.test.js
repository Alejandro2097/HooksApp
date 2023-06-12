import  { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas con el useContext', () => {
    test('debe de retornar los valores por defecto', () => {
        renderHook(() => useCounter());
    });
});