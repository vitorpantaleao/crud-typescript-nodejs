import { Pool } from "pg";

const connectionString = 'postgres://ysusgbpe:iNYN-ymalt-b4UMwdFTBrhPklFQ6q4U9@kesavan.db.elephantsql.com/ysusgbpe'
const db = new Pool({ connectionString })

export default db