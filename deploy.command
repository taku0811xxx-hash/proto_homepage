#!/bin/bash

# 【重要】実行したファイルの場所（プロジェクトルート）に自動移動する
cd "$(dirname "$0")"

clear
echo "=================================================="
echo "   PROTO. DEPLOYMENT SYSTEM (Mac Mode)"
echo "=================================================="
# ここがプロジェクトのパスになっているか確認してください
echo "Current Path: $(pwd)"
echo "--------------------------------------------------"

# 1. 変更内容の確認
echo "[ 変更内容の確認 ]"
git status -s
echo "--------------------------------------------------"

# Gitリポジトリかどうかのチェック
if [ ! -d .git ]; then
    echo "ERROR: ここはGitリポジトリではありません。"
    echo "プロジェクトのルートフォルダに配置してください。"
    read -p "Press Enter to exit..."
    exit 1
fi

# 2. 実行確認
read -p "この内容でデプロイを実行しますか？ (y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo "キャンセルしました。"
    exit 0
fi

# 3. 実行
echo -e "\n実行中..."
git add .

read -p "コミットメッセージ（空なら日時）: " MSG
if [ -z "$MSG" ]; then
    MSG="Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$MSG"
git push origin main

echo "--------------------------------------------------"
echo "   デプロイ完了しました。"
echo "=================================================="