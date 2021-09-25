declare namespace NodeJS {
    // 環境変数名の定義
    interface ProcessEnv {
      readonly TARGET_URL:string;
    }
  }