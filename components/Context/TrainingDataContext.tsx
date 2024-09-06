import React, { createContext, useContext, useState } from 'react';

interface TrainingDataContextType {
    message: string; // 現在のメッセージ
    setMessage: (msg: string) => void; // メッセージを更新するための関数
}

// TrainingDataContextを作成。初期値はundefined。
const TrainingDataContext = createContext<TrainingDataContextType | undefined>(undefined);

// TrainingDataProviderコンポーネントを定義
export const TrainingDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      // useStateフックを使用してメッセージの状態を管理
      const [message, setMessage] = useState<string>(''); // 初期メッセージは空

        // Providerで子コンポーネントに状態を渡す
        return (
            <TrainingDataContext.Provider value={{ message, setMessage }}>
                      {children} {/* Provider内の子コンポーネントを描画 */}
                      </TrainingDataContext.Provider>
                        );
                    };
                    // useTrainingDataというカスタムフックを定義
                    export const useTrainingData = () => {
                      const context = useContext(TrainingDataContext); // TrainingDataContextを取得

                        // contextがundefinedの場合はエラーを投げる
                        if (!context) {
                          throw new Error('useTrainingData must be used within a TrainingDataProvider');
                        }

                        return context; // contextを返す
                      };