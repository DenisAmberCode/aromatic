# Generated by Django 2.1 on 2019-09-02 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0011_auto_20190816_1419'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='in_basket',
            field=models.BooleanField(default=False),
        ),
    ]
