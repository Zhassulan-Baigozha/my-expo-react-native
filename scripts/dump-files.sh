# scripts/dump-files.sh
#!/usr/bin/env bash
set -e

# 📁 Папка для дампов
DUMPS_DIR="dump"
mkdir -p "$DUMPS_DIR"

# 📅 Дата в формате YYYY.MM.DD
DATE=$(date +"%Y.%m.%d")

# 📄 Итоговый файл
OUT="$DUMPS_DIR/${DATE}-dump-files.txt"
> "$OUT"

dump_file () {
  local file="$1"
  echo "===== $file =====" >> "$OUT"
  cat "$file" >> "$OUT"
  echo "" >> "$OUT"
}

dump_dir () {
  local dir="$1"
  local exclude="$2"

  if [ -n "$exclude" ]; then
    find "$dir" \
      -path "node_modules" -prune -o \
      -path ".git" -prune -o \
      -path "$exclude" -prune -o \
      -type f ! -name "*.png" -print
  else
    find "$dir" -type f ! -name "*.png" -print
  fi \
  | sort | while read -r file; do
      dump_file "$file"
    done
}

# 📦 files
[ -f README.md ] && dump_file "README.md"
[ -f package.json ] && dump_file "package.json"
[ -f app.config.ts ] && dump_file "app.config.ts"
[ -f eas.json ] && dump_file "eas.json"
[ -f expo-env.d.ts ] && dump_file "expo-env.d.ts"
[ -f tsconfig.json ] && dump_file "tsconfig.json"

# 📂 folders
# [ -d .expo ] && dump_dir ".expo"
[ -d src ] && dump_dir "src"

echo "✔ dumped: files → $OUT"
