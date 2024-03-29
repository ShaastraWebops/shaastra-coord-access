import { Dropbox } from "dropbox";
import fetch from "isomorphic-fetch";

const accessToken = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;

const dbx = new Dropbox({ accessToken, fetch });

export { dbx };
