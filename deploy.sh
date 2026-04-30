#!/bin/bash

# 画面をクリアして開始
clear
echo "=================================================="
echo "   PROTO. DEPLOYMENT SYSTEM (Mac Mode)"
echo "=================================================="
echo "Current Path: $(pwd)"
echo "--------------------------------------------------"

# 1. 変更内容の確認
echo "[ 変更内容の確認 ]"
git status -s
echo "--------------------------------------------------"

# 2. 実行確認
read -p "この内容でデプロイを実行しますか？ (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo "キャンセルしました。"
    exit 0
fi

# 3. 実行
echo -e "\n実行中..."
git add .

# コミットメッセージの入力（空なら現在日時）
read -p "コミットメッセージ（空なら日時）: " MSG
if [ -z "$MSG" ]; then
    MSG="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$MSG"
git push origin main

echo "--------------------------------------------------"
echo "   デプロイ完了しました。"
echo "=================================================="