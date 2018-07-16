export class GuidHelper {

  static guid() {
    const uniqueId = Math.random().toString(36).substring(2)
      + (new Date()).getTime().toString(36);
    return uniqueId;
  }

}
