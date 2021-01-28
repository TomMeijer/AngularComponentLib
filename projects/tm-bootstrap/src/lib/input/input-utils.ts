export class InputUtils {

  public getModelProperty(model: object, propertyName: string): any {
    return propertyName.split('.').reduce((prev, curr) => prev && prev[curr], model);
  }

  public setModelProperty(model: object, propertyName: string, value: any): void {
    let properties = propertyName.split('.');
    let len = properties.length;
    for (let i = 0; i < len - 1; i++) {
      let property = properties[i];
      if (!model[property]) {
        model[property] = {};
      }
      model = model[property];
    }
    model[properties[len - 1]] = value;
  }
}
