import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import { Counter } from './Counter';


describe('Counter', () => {
    test('should render properly', () => {
        renderWithProviders(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    test('should render increment properly', () => {
        renderWithProviders(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();

        fireEvent.click(screen.getByText('+'));
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('should render decrement properly', () => {
        renderWithProviders(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('-')).toBeInTheDocument();

        fireEvent.click(screen.getByText('-'));
        expect(screen.getByText('-1')).toBeInTheDocument();
    });

    test('should render addByAmount properly', () => {
        renderWithProviders(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('Add Amount')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Add Amount'));
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    test('should render Add If Odd properly', async () => {
        const ButtonText = 'Add If Odd';
        renderWithProviders(<Counter />)
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText(ButtonText)).toBeInTheDocument();

        fireEvent.click(screen.getByText(ButtonText));
        expect(screen.getByText('0')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Add Amount'));
        expect(screen.getByText(ButtonText)).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    test('should render CUSTOM properly', async () => {
        renderWithProviders(<Counter />, { preloadedState: {
            counter: {
                value: 1,
                status: "idle",
            }
        }})
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('CUSTOM')).toBeInTheDocument();

        fireEvent.click(screen.getByText('CUSTOM'));
        expect(screen.queryByText('0')).not.toBeInTheDocument();
    });

    test('should set increment amount', () => {
        const testID = 'incrementGap';
        renderWithProviders(<Counter />)
        expect(screen.getByTestId(testID)).toBeInTheDocument();
    });
});