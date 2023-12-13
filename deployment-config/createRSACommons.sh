#!/bin/bash
echo -e $BACKEND_COMMONS_KEY >  ~/.ssh/BackendCommonsKey
cat <<EOT >> ~/.ssh/config
Host github.com
  IdentityFile ~/.ssh/BackendCommonsKey
EOT
