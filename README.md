# My personal web

## Installation

It's recommended that you setup a virtualenv before development.

Setting django tailwind
- install npm


```sh
add 'tailwind', into setting.py on installed_apps
INSTALLED_APPS = [
     .......
    'tailwind',
     .......
]

python manage.py tailwind init

create 'theme'
add 'theme' into setting.py
INSTALLED_APPS = [
     .......
    'tailwind',
     'theme',
]

python manage.py tailwind install
python manage.py tailwind start
```


Then just install requirements, migrate, and runserver to get started:
```sh
git clone https://github.com/cahyoadhi/personalweb.git
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
