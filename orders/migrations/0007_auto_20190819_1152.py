# Generated by Django 2.1 on 2019-08-19 11:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_productinbasket_session_key'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productinbasket',
            old_name='number',
            new_name='nmb',
        ),
    ]