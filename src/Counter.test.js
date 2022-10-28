import { render, fireEvent, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('shold render inital value', () => {
    render(<Counter initialCount={0} />)
    const countValue = Number(screen.getByTestId('count').textContent)
    expect(countValue).toBe(0)
  })
  it('count should increment 1', () => {
    render(<Counter initialCount={0} />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const countValue1 = Number(screen.getByTestId('count').textContent)
    expect(countValue1).toBe(0)
    fireEvent.click(incrementButton)
    const countValue2 = Number(screen.getByTestId('count').textContent)
    expect(countValue2).toEqual(1)
  })
  it('count should decrement', () => {
    render(<Counter initialCount={0} />)
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    const countValue1 = Number(screen.getByTestId('count').textContent)
    expect(countValue1).toBe(0)
    fireEvent.click(decrementButton)
    const countValue2 = Number(screen.getByTestId('count').textContent)
    expect(countValue2).toEqual(-1)
  })
  it('count should be reset', () => {
    render(<Counter initialCount={5} />)
    const resetButton = screen.getByRole('button', { name: 'Restart' })
    const countValue1 = Number(screen.getByTestId('count').textContent)
    expect(countValue1).toBe(5)
    fireEvent.click(resetButton)
    const countValue2 = Number(screen.getByTestId('count').textContent)
    expect(countValue2).toEqual(0)
  })
  it('count should switch sign', () => {
    render(<Counter initialCount={5} />)
    const signButton = screen.getByRole('button', { name: 'Switch Sign' })
    const countValue1 = Number(screen.getByTestId('count').textContent)
    expect(countValue1).toBe(5)
    fireEvent.click(signButton)
    const countValue2 = Number(screen.getByTestId('count').textContent)
    expect(countValue2).toEqual(-5)
    fireEvent.click(signButton)
    const countValue3 = Number(screen.getByTestId('count').textContent)
    expect(countValue3).toEqual(5)
  })
})
