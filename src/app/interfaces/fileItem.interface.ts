export class FileItem {
  name: string | undefined;

  isDirectory: boolean | undefined;

  size?: number;

  items?: FileItem[];
}
