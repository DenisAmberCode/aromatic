# Generated by Django 2.1 on 2019-08-16 14:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0010_auto_20190816_1354'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='type',
            new_name='category',
        ),
    ]