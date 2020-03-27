import { t } from 'testcafe'

export default class WebElement {
  constructor(private selector: Selector) {}

  public async click() {
    await t.click(this.selector)
  }

  //...

}
