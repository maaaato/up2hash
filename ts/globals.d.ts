declare namespace NodeJS {
    // 環境変数名の定義
    interface ProcessEnv {
      readonly MYAPP_GITHUB_TOKEN: string;
      readonly MYAPP_URL:string;
    }
  }