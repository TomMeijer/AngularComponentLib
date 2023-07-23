export class FileUtils {

  public static base64ToFile(base64: string, contentType: string, fileName: string): File {
    const bstr = atob(base64);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, {type: contentType});
  }
}
