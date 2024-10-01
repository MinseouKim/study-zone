
# Recreate sitemap.json
rm -f sitemap.json
touch sitemap.json

# search all directories from members directory
echo "[" >> sitemap.json
for dir in members/*/
do
  dir=${dir%*/}
  # add , to all directories except the last one
  if [ "$dir" != "members/$(ls members | tail -n 1)" ]; then
    echo "  \"${dir}\"," >> sitemap.json
  else
    echo "  \"${dir}\"" >> sitemap.json
  fi
done
echo "]" >> sitemap.json