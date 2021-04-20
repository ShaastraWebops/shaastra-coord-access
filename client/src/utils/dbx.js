import { Dropbox } from "dropbox";
import fetch from "isomorphic-fetch";

// const accessToken = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;
const accessToken = "uI-JrLi6M-kAAAAAAAAAAXkza58CG5epKkwWAnV3tm8sbkTEB30G093p9FAyXzfu";

const dbx = new Dropbox({ accessToken, fetch });

export { dbx };

// REACT_APP_DROPBOX_ACCESS_TOKEN=uI-JrLi6M-kAAAAAAAAAAXkza58CG5epKkwWAnV3tm8sbkTEB30G093p9FAyXzfu