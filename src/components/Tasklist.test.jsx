import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './Tasklist';

describe('TaskList', () => {
  let alertMock;
  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and submit button', () => {
    render(<TaskList />);
    expect(screen.getByPlaceholderText(/enter a task/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('updates input value on typing', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');
  });

  it('adds a task and clears input on submit', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(input.value).toBe('');
    expect(screen.getByText('0 / 1 tasks')).toBeInTheDocument();
  });

  it('does not add a task for empty input or spaces', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('adds multiple tasks and displays them', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(button);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('0 / 2 tasks')).toBeInTheDocument();
  });

  it('toggles checkbox, marks as completed, updates count, and triggers alert', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(alertMock).toHaveBeenCalledWith('The task is completed!');
    expect(checkbox.checked).toBe(true);
    expect(screen.getByText('1 / 1 tasks')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toHaveClass('line-through');
  });

  it('unchecks completed task, updates count, does not trigger alert again', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox); 
    fireEvent.click(checkbox); 

    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(false);
    expect(screen.getByText('0 / 1 tasks')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).not.toHaveClass('line-through');
  });

  it('completed count updates with multiple tasks', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(button);

    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(screen.getByText('1 / 2 tasks')).toBeInTheDocument();
    fireEvent.click(checkboxes[1]);
    expect(screen.getByText('2 / 2 tasks')).toBeInTheDocument();
    fireEvent.click(checkboxes[0]);
    expect(screen.getByText('1 / 2 tasks')).toBeInTheDocument();
  });

  it('shows and hides error message correctly', () => {
    render(<TaskList />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByRole('button', { name: /submit/i });

    // Submit empty input: error should show
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.queryByText(/no input/i)).toBeInTheDocument();

    // Type something: error should hide
    fireEvent.change(input, { target: { value: 'Task' } });
    expect(screen.queryByText(/no input/i)).not.toBeInTheDocument();
  });
});