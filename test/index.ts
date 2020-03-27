import { getByText } from '@testing-library/testcafe'
import WebElement from './WebElement';

fixture`within`.page`http://localhost:3000`

test('works with getBy* selectors', async t => {

    await t
     
    .expect(getByText('Learn React').exists)
    .ok()
})


test('Bar', async (t) => {
  let button = new WebElement(getByText('Learn React'))
  button.click()
})
