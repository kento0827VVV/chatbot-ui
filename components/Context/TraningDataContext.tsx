import React, { createContext, useContext, useState } from 'react';

interface TraningDataContextType {
    message: string; // 現在のメッセージ
    setMessage: (msg: string) => void; // メッセージを更新するための関数
}

// TraningDataContextを作成。初期値はundefined。
const TraningDataContext = createContext<TraningDataContextType | undefined>(undefined);

// TraningDataProviderコンポーネントを定義
export const TraningDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      // useStateフックを使用してメッセージの状態を管理
      const [message, setMessage] = useState<string>(''); // 初期メッセージは空

        // Providerで子コンポーネントに状態を渡す
        return (
            <TraningDataContext.Provider value={{ message, setMessage }}>
                      {children} {/* Provider内の子コンポーネントを描画 */}
                      </TraningDataContext.Provider>
                        );
                    };
                    // useTraningDataというカスタムフックを定義
                    export const useTraningData = () => {
                      const context = useContext(TraningDataContext); // TraningDataContextを取得

                        // contextがundefinedの場合はエラーを投げる
                        if (!context) {
                          throw new Error('useTraningData must be used within a TraningDataProvider');
                        }

                        return context; // contextを返す
                      };