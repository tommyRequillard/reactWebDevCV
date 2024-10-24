# Définir les variables pour les remotes
$GITHUB_REMOTE = "github"
$GITLAB_REMOTE = "gitlab"
$LOG_FILE = "push_log.txt"

# Date et heure pour le log
Add-Content -Path $LOG_FILE -Value ("{0} {1} - Démarrage du push" -f (Get-Date).ToShortDateString(), (Get-Date).ToLongTimeString())

# Se positionner sur master
git checkout master

# Ajouter tous les fichiers et effectuer un commit
git add .

# Demander à l'utilisateur d'entrer un message de commit
$COMMIT_MESSAGE = Read-Host -Prompt "Entrez le message de commit"

# Effectuer le commit avec le message fourni par l'utilisateur
git commit -m "$COMMIT_MESSAGE"

<<<<<<< HEAD
# Pousser vers GitHub
git push $GITHUB_REMOTE master
if ($LASTEXITCODE -eq 0) {
    Add-Content -Path $LOG_FILE -Value "Push réussi vers GitHub"
} else {
    Add-Content -Path $LOG_FILE -Value "Erreur lors du push vers GitHub"
}

# Pousser vers GitLab
git push $GITLAB_REMOTE master
if ($LASTEXITCODE -eq 0) {
    Add-Content -Path $LOG_FILE -Value "Push réussi vers GitLab"
} else {
    Add-Content -Path $LOG_FILE -Value "Erreur lors du push vers GitLab"
}

Add-Content -Path $LOG_FILE -Value ("{0} {1} - Fin du push" -f (Get-Date).ToShortDateString(), (Get-Date).ToLongTimeString())
=======
# Créer une branche temporaire pour GitHub
git checkout -b temp-github

# Retirer le fichier .gitlab-ci.yml de l'index (s'il est suivi)
if (Test-Path ".gitlab-ci.yml") {
    git rm --cached .gitlab-ci.yml  
}

# Pousser vers GitHub
git push $GITHUB_REMOTE temp-github:master  # Pousser vers GitHub

# Se repositionner sur la branche master
git checkout master

# Supprimer la branche temporaire
if (git branch --list temp-github) {
    git branch -d temp-github  # Supprimer la branche temporaire
}

# ---------------------------------------------------------
# Créer une branche temporaire pour GitLab
git checkout -b temp-gitlab

# Retirer le répertoire .github de l'index (s'il est suivi)
if (Test-Path ".github") {
    git rm -r --cached .github  
}

# Pousser vers GitLab
git push $GITLAB_REMOTE temp-gitlab:master  # Pousser vers GitLab

# Se repositionner sur la branche master
git checkout master

# Supprimer la branche temporaire
if (git branch --list temp-gitlab) {
    git branch -d temp-gitlab  # Supprimer la branche temporaire
}


# # Définir les variables pour les remotes
# $GITHUB_REMOTE = "github"
# $GITLAB_REMOTE = "gitlab"
# $LOG_FILE = "push_log.txt"

# # Date et heure pour le log
# Add-Content -Path $LOG_FILE -Value ("{0} {1} - Démarrage du push" -f (Get-Date).ToShortDateString(), (Get-Date).ToLongTimeString())

# # Ajouter tous les fichiers et effectuer un commit
# git add .

# # Demander à l'utilisateur d'entrer un message de commit
# $COMMIT_MESSAGE = Read-Host -Prompt "Entrez le message de commit"

# # Effectuer le commit avec le message fourni par l'utilisateur
# git commit -m "$COMMIT_MESSAGE"

# # Pousser vers GitHub
# git push $GITHUB_REMOTE master
# if ($LASTEXITCODE -eq 0) {
#     Add-Content -Path $LOG_FILE -Value "Push réussi vers GitHub"
# } else {
#     Add-Content -Path $LOG_FILE -Value "Erreur lors du push vers GitHub"
# }

# # Pousser vers GitLab
# git push $GITLAB_REMOTE master
# if ($LASTEXITCODE -eq 0) {
#     Add-Content -Path $LOG_FILE -Value "Push réussi vers GitLab"
# } else {
#     Add-Content -Path $LOG_FILE -Value "Erreur lors du push vers GitLab"
# }

# Add-Content -Path $LOG_FILE -Value ("{0} {1} - Fin du push" -f (Get-Date).ToShortDateString(), (Get-Date).ToLongTimeString())
>>>>>>> aa9e165e4d5718ba7c5842ee13deb3a59716c471
