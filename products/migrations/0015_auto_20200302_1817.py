# Generated by Django 3.0.3 on 2020-03-02 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0014_product_price_with_discount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimg',
            name='image',
            field=models.ImageField(upload_to='media/products_images'),
        ),
    ]
