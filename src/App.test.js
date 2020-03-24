import React from 'react';
import { render, waitFor, getByText } from '@testing-library/react';
import  userEvent  from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow} from "./api/fetchShow";


jest.mock('./api/fetchShow');
console.log(mockFetchShow);



test('app is rendering', async () => {
    mockFetchShow.mockResolvedValueOnce()

    // const { getByText, getAllByText } = render(<App/>)

    // await waitFor(() => {
    //     getByText(/select a season/i)
    // })

    // userEvent.click(getByText(/select a season/i))

    // expect(getAllByText(/season/i)).toHaveLength(3)

    // expect(mockFetchShow).toHaveBeenCalledTimes(1)
})